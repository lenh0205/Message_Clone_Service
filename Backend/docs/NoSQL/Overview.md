================================================================
# NoSql
* -> NoSQL databases are widely recognized for their **ease of development**, **functionality**, and **performance at scale**

## Flexibility
* -> _NoSQL databases_ generally **provide flexible schemas**  to **`store data`**
* -> that **enable faster and more iterative development**
* -> the flexible data model makes NoSQL databases ideal for **semi-structured** and **unstructured data**

## Scalability
* -> scale easily for **`building modern applications`**
* -> it's typically **designed to scale out by using distributed clusters of hardware**, as opposed to **`scaling up by adding expensive and robust servers`**
* _some cloud providers handle these operations behind the scenes as a fully managed service_

## High performance
* -> _NoSQL databases_ are **optimized for specific data models and access patterns**
* -> these **`enable higher performance`** than if we were trying to accomplish **`similar functionality with relational databases`**

## Highly functional
* -> _NoSQL databases_ provide **highly functional APIs and data types** that are **purpose-built** for **`each of their respective data models`**

================================================================
# Common types of NoSQL databases
* -> there are several different _NoSQL database systems_ due to variations in the way they **`manage and store schema-less data`**

## Key-value databases
* -> _Key-value databases_ are **highly partitionable** and **allow horizontal scaling at a high level** that **`other types of NoSQL databases may not achieve`**
* -> **`Use cases`** such as **gaming, ad tech, and IoT** lend themselves particularly well to the key-value store data design

* -> _a key-value database_ stores data as a **`collection of key-value pairs`** in which **`a key serves as a unique identifier`**
* -> **`Keys and values can be anything`**, ranging from simple objects to complex compound objects

```r - Ex: 
// Amazon DynamoDB
// -> is designed to provide "consistent performance" with "single-digit millisecond latency" for any "scale of workloads"
```

## Document databases
* -> _Document databases_ have the **same document model format that developers use in their application code**
* -> they store data as **`JSON objects`** that are **flexible**, **semi-structured**, and **hierarchical** in nature
* -> _the flexible, semistructured, and hierarchical nature_ of **`documents`** and **`document databases`** allows them to **evolve with application's needs**
* -> the _`Document database model`_ works well with **catalogs, user profiles, and content management systems** - where **`each document`** is **unique and evolves over time**

```r - Ex: 
// Amazon DocumentDB (with MongoDB compatibility) and MongoDB 
// -> are popular document databases that provide powerful and intuitive APIs for "flexible and iterative development"
```

## Graph databases
* -> _Graph databases_ are **`purpose-built`** to make it easy to **build and run applications that work with highly connected datasets**

* -> they use **nodes** to **`store data entities`** and **edges** to **`store relationships between entities`**
* -> an **edge** always has **`a start node, end node, type, and direction`**
* -> it can describe **parent-child relationships**, **actions**, **ownership**, and **the like**
* -> there is **`no limit to the number and kind of relationships`** a node can have

* -> typical **`use cases`** for a graph database include **social networking, recommendation engines, fraud detection, and knowledge graphs**

```r - Ex:
// Amazon Neptune 
// -> is a fully-managed graph database service supporting both the "Property Graph model" and "the Resource Description Framework (RDF)" with the choice of two graph APIs (TinkerPop and RDF/SPARQL)
```

## In-memory databases
* -> while **`other non-relational databases`** **store data on disk or SSDs**
* -> _in-memory data stores_ are designed to **eliminate the need to access disks**

* -> they are ideal for **`applications`** that **require microsecond response times or have large spikes in traffic**
* -> we can use them in **`gaming and ad-tech applications`** for features like **leaderboards, session stores, and real-time analytics**

```r
// Amazon MemoryDB for Redis 
// -> is a Redis-compatible, durable, in-memory database service that "delivers microsecond read latency", "single-digit millisecond write latency", and "Multi-AZ durability"

// Amazon ElastiCache
// -> is a fully managed, in-memory "caching" service compatible with both Redis and Memcached
// -> to serve "low-latency", "high-throughput workloads"

// Amazon DynamoDB Accelerator (DAX) 
// -> is another example of a purpose-built data store that "makes DynamoDB reads an order of magnitude faster"
```

## Search databases
* -> _a search-engine database_ is a type of non-relational database that is **dedicated to the search of data content**
* -> they use **indexes** to **`categorize similar characteristics among data`** and **`facilitate search capability`**

* -> such as **application output logs used by developers to troubleshoot issues**
* -> _Search-engine databases_ are optimized for **sorting unstructured data like `images` and `videos`**

```r
// Amazon OpenSearch Service 
// -> is purpose-built for providing "near-real-time visualizations" and "analytics of machine-generated data by indexing, aggregating, and searching semistructured logs and metrics"
```
