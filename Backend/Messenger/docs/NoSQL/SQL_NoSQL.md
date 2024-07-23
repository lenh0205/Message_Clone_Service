========================================================================
# Choosing NoSQL databases over SQL databases
* -> **`a NoSQL database`** is best for **handling indeterminate, unrelated, or rapidly changing data**

* _it is **`intuitive`** to **use for developers when the application dictates the database schema**; we can use it for applications that:_
* -> **`need flexible schemas`** that **enable faster and more iterative development**
* -> **prioritize performance** over **`strong data consistency and maintaining relationships between data tables (referential integrity)`**
* -> require **horizontal scaling** by **`sharding across servers`**
* -> support for **semi-structured and unstructured data**

* we don't always have to **`choose between a non-relational and relational database schema`**_
* -> we can employ a **combination of SQL and NoSQL databases** in our applications
* -> this hybrid approach is quite common and **`ensures each workload is mapped to the right database`** for optimal price performance

========================================================================
# SQL vs NoSQL
* -> for decades, the predominant data model in application development was the **`relational data model`** that stored data in tables made of rows and columns
* -> **Structured Query Language (SQL)** was used to create and edit these relational tables
* -> **`SQL databases model data relationships`** as **tables**
* -> the **rows** in the table **`represent a collection of related values of one object or entity`**
* -> each **column** in the table **`represents a data attribute`**, and a **field** (or table cell) **`stores the actual value of the attribute`**
* => we can use a relational database management system (RDBMS) to **access the data in many different ways without reorganizing the database tables themselves**
<br/>
* -> it wasn’t until the mid to late 2000s that **`other flexible data models`** began to gain significant adoption and usage
* -> to differentiate and categorize these **`new classes of databases and data models`**, the term **NoSQL** was coined - stands for not only SQL or non-SQL

* _Key differences_
<table border="0" cellspacing="0" cellpadding="0" width="725">
    <tbody>
        <tr>
            <td width="83" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="324" valign="top">
                <p>Relational databases</p>
            </td>
            <td width="318" valign="top">
                <p>NoSQL databases</p>
            </td>
        </tr>
        <tr>
            <td width="83" valign="top">
                <p>Optimal workloads</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </td>
            <td width="324" valign="top">
                <p><a href="https://aws.amazon.com/relational-database/">Relational databases</a> are designed for
                    transactional and strongly consistent online transaction processing (OLTP) applications. They are
                    also good for online analytical processing (OLAP).&nbsp;&nbsp;&nbsp;</p>
            </td>
            <td width="318" valign="top">
                <p>NoSQL databases are designed for a number of data access patterns that include low-latency
                    applications. NoSQL search databases are designed for analytics over semi-structured data.</p>
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="83" valign="top">
                <p>Data model</p>
            </td>
            <td width="324" valign="top">
                <p>The relational model normalizes data into tables that are composed of rows and columns. A schema
                    strictly defines the tables, rows, columns, indexes, relationships between tables, and other
                    database elements. The database enforces referential integrity in relationships between tables.</p>
            </td>
            <td width="318" valign="top">
                <p>NoSQL databases provide a variety of data models, such as key-value, document, graph, and column,
                    which are optimized for performance and scale.</p>
            </td>
        </tr>
        <tr>
            <td width="83" valign="top">
                <p>ACID properties</p>
            </td>
            <td width="324" valign="top">
                <p>Relational databases provide atomicity, consistency, isolation, and durability (ACID) properties:</p>
                <ul>
                    <li>Atomicity requires a transaction to execute completely or not at all.</li>
                    <li>Consistency requires that the data must conform to the database schema when a transaction has
                        been committed.</li>
                    <li>Isolation requires that concurrent transactions execute separately from each other.</li>
                    <li>Durability requires the ability to recover from an unexpected system failure or power outage to
                        the last known state.</li>
                </ul>
            </td>
            <td width="318" valign="top">
                <p>Most NoSQL databases offer trade-offs by relaxing some of the ACID properties of relational databases
                    in favor of a more flexible data model that can scale horizontally. This makes NoSQL databases an
                    excellent choice for high-throughput, low-latency use cases that need to scale horizontally beyond
                    the limitations of a single instance.</p>
            </td>
        </tr>
        <tr>
            <td width="83" valign="top">
                <p>Performance</p>
            </td>
            <td width="324" valign="top">
                <p>Performance is generally dependent on the disk subsystem. The optimization of queries, indexes, and
                    table structure is often required to achieve peak performance.</p>
            </td>
            <td width="318" valign="top">
                <p>Performance is generally a function of the underlying hardware cluster size, network latency, and the
                    calling application.</p>
            </td>
        </tr>
        <tr>
            <td width="83" valign="top">
                <p>Scale</p>
            </td>
            <td width="324" valign="top">
                <p>Relational databases typically scale up by increasing the compute capabilities of hardware or scale
                    out by adding replicas for read-only workloads.</p>
            </td>
            <td width="318" valign="top">
                <p>NoSQL databases are typically partitionable. This is because access patterns can scale out by using
                    distributed architecture to increase throughput that provides consistent performance at
                    near-boundless scale.</p>
            </td>
        </tr>
        <tr>
            <td width="83" valign="top">
                <p>APIs</p>
            </td>
            <td width="324" valign="top">
                <p>Requests to store and retrieve data are communicated using queries that conform to a structured query
                    language (SQL). These queries are parsed and executed by the relational database.</p>
            </td>
            <td width="318" valign="top">
                <p>Object-based APIs allow app developers to easily store and retrieve data structures. Partition keys
                    let apps look up key-value pairs, column sets, or semi-structured documents that contain serialized
                    app objects and attributes.</p>
            </td>
        </tr>
    </tbody>
</table>
