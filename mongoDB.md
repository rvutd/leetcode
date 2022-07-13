### Start MonogoDB Community Server:
brew services start mongodb-community@4.0-version

### 

### Create new collection:
use collection_name

## Insert Data to Collection

### Single Data:
db.posts.insert({
  title: 'Post One',
  body: 'Body of post one',
  category: 'News',
  likes: 4,
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  data: Date()
})

### Multiple Data:
db.posts.insertMany([
  {
    title: 'Post Two',
    body: 'Body of post two',
    category: 'Technology',
    date: Date()
  },
  {
    title: 'Post Three',
    body: 'Body of post three',
    category: 'Entertainment',
    date: Date()
  }
])

## Search Data in Collections:

### All data
db.posts.find()

### By Property
db.posts.find({ category: 'News' })

## Sorting Data
db.posts.find().sort({ title: 1 }) // For Ascending
db.posts.find().sort({ title: -1 }) // For Descending

## IMP Methods in MongoDB
### count(): Number of data by category
db.posts.find({ category: 'News' }).count()

### limit(numberOfRecords): Number of records that you want to see
db.posts.find().limit(2)

### forEach(function(data) { })
db.posts.find().forEach(function(data) { print('Blog Post: ' + data.title) })
