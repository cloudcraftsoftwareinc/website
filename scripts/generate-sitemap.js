const Feed = require('feed').Feed
const fs = require('fs')
const assert = require('assert').strict

function getRandomDate(from, to) {
    const fromTime = from.getTime();
    const toTime = to.getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
}

const getAllLandingPages = async () => {
  const listing = fs.readdirSync('./src/posts/')
  const posts = []

  for (const post of listing) {
    const entry = fs.readFileSync(`./src/posts/${post}`, { encoding: 'utf8', flag: 'r' })

    let title = null
    let author = null
    let description = null
    let image = null

    const head = entry.split('---')[1] || ''
    for (const line of head.split('\n')) {
      if (line.includes('title: ')) {
        title = line.split('title:')[1]?.replace(/\"/g, '').replace(/\'/g, '')
      }
      if (line.includes('description: ')) {
        description = line.split('description:')[1]?.replace(/\"/g, '').replace(/\'/g, '')
      }
      if (line.includes('author: ')) {
        author = line.split('author:')[1]?.replace(/\"/g, '').replace(/\'/g, '')
      }
      if (line.includes('image: ')) {
        image = line.split('image:')[1]?.replace(/\"/g, '').replace(/\'/g, '')
      }
    }
    console.log("Generating ", post)
    assert.ok(title, `Could not generate feed.xml, title not present for ${post}`)
    assert.ok(description, `Could not generate feed.xml, description not present for ${post}`)
    assert.ok(author, `Could not generate feed.xml, author not present for ${post}`)

    posts.push({
      slug: post.split('.')[0],
      title,
      description,
      author,
      date: getRandomDate(new Date('2023-09-01'), new Date('2024-02-01'))
    })
  }
  return posts
}


const generateRssFeed = async () => {
  const feed = new Feed({
    title: 'Cloudcraft Software',
    id: 'https://cloudcraft.software/feed.xml',
    link: 'https://cloudcraft.software/feed.xml',
    feedLinks: {
      atom: 'https://cloudcraft.software/feed.xml',
    },
    author: {
      name: 'Aaron Fay',
    },
  })

  const posts = await getAllLandingPages()
  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      guid: `https://cloudcraft.software/landing/${post.slug}`,
      link: `https://cloudcraft.software/landing/${post.slug}`,
      date: new Date(post.date),
      description: post.description,
      author: post.author,
      content: ''
    })
  })
  fs.writeFileSync('./public/sitemap.xml', feed.atom1())

  return {
    props: {
      posts,
    },
  }
}

async function main() {
  await generateRssFeed()
}

main()