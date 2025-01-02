```javascript
// Solution 1: Using $exists operator
db.collection.find({ field: { $exists: true } });

// Solution 2: Handling empty array explicitly
const queryArray = [/* ... array of values ... */];
if (queryArray.length === 0) {
  db.collection.find({}); // Return all documents
} else {
  db.collection.find({ field: { $in: queryArray } });
}
```