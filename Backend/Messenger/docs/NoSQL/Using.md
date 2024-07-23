================================================================
# Mechanism
* -> _NoSQL databases_ **use a variety of data models for `accessing` and `managing` data**; **these types of databases are optimized specifically** for applications that require:
* -> **`flexible data models`**, **`large data volume`**, and **`low latency`**, which are achieved by **relaxing some of the data consistency restrictions of relational databases**
* -> there are differences in implementation based on the data model; however, many NoSQL databases **`use Javascript Object Notation (JSON)`** - an open data interchange format that represents data as a collection of name-value pairs

================================================================

# Example 1
* -> **`applications process a large data volume from disparate sources`** like _social media, smart sensors, and third-party databases_
* -> all of this **`disparate data doesn't fit neatly into the relational model`**
* -> **`enforcing tabular structures`** can lead to **redundancy, data duplication, and performance issues at scale**

# Example 2
```r
// in a "relational database", a book record is often disassembled (or normalized) and stored in separate "tables", and relationships are defined by primary and foreign "key" constraints
// -> the "Books table" has columns for ISBN, Book Title, and Edition Number
// -> the "Authors table" has columns for AuthorID and Author Name; 
// -> and finally, the "Author-ISBN" table has columns for AuthorID and ISBN
// => the "relational model" is designed to enable the database to "enforce referential integrity between tables in the database", "normalized to reduce the redundancy", and "generally optimized for storage"

// in a "NoSQL database", a book record is usually stored as a "document"
// -> for each book - the item, ISBN, Book Title, Edition Number, Author Name, and AuthorID are stored as attributes in a single document
// -> in this model, data is "optimized for intuitive development" and "horizontal scalability"
```

================================================================
# Use Cases
* -> the range of NoSQL databases and their respective uses cases are **wide-ranging**
* -> like building **`high-performance mobile`**, **`Internet of Things (IoT)`**, **`gaming`**, and **`web applications that provide great user experiences at scale`**

* _while it is challenging to present a representative set of use cases, below is a few illustrative examples as thought-starters:_

## Real-time data management
* -> we can deliver **`real-time recommendations`**, **`personalization`**, and **`improved user experiences`** with NoSQL databases

```r - Ex:
// Disney+ delivers its "extensive digital content library" to "over 150 million+ subscribers" using NoSQL database technology
// it can scale and "deliver popular features" such as Continue Watching, Watchlist, and Personalized Recommendations with "Amazon DynamoDB"
```

## Cloud security
* -> we can use **graph databases** to **`quickly discover complex relationships within our data`**

```r - Ex:
// -> "Wiz" re-imagined cloud security as "a graph" using "Amazon Neptune"
// -> "Wiz" helps their customers improve their security posture by "quickly identifying" and "fixing the most critical risks"
// -> they use graph model stored in Amazon Neptune to "uncover the toxic combination of risk factors" that represent critical risks
// -> the Wiz risk engines "traverse the graph" and "within seconds, weave together a series of interconnected risks factors" in a security graph
```

## High-availability applications
* -> **`distributed NoSQL databases`** are excellent for **building high-availability, low-latency applications for messaging, social media, file sharing, and more**

```r - Ex:
// Snapchat has more than "290 million users sending billions of pictures and video messages daily"
// it uses NoSQL database systems to reduce the median latency of sending messages by 20%
```
