# x_team_doc

Here's a simple example demonstrating how to inject JSON and/or YAML to build Swagger API documentation endpoints.

Simple conversion between the two file types is provided.

There are also a few examples about how to use the EXACT same JSON to build a Markdown file and a PDF file. Thus, one file can be used to generate three needs.

**The critical work from a *file generation* standpoint is then to determine *what* content is automatically generated, *how it looks*, *where* it gets generated from, etc.**

# Specific Details

This contains several technologies that are spread across several different endpoints and views.

#### Views

https://localhost:4444/views
```
    Main React client
```

https://localhost:4444/swagger
```
    View a generated Swagger HTML
```

https://localhost:4444/pdf
```
    View a PDF
```

#### API Endpoints

https://localhost:4444/api/swagger/json
```
    Swagger JSON
```

https://localhost:4444/api/swagger/yaml
```
    Swagger YAML as a string
```

https://localhost:4444/api/swagger/yamljson
```
    Swagger YAML as JSON demonstrating interoperability of the two configuration types
```

https://localhost:4444/api/markdown
```
    Swagger JSON as a Markdown object
```

https://localhost:4444/api/pdf
```
    Swagger JSON parsed into PDF consummable JSON
```

https://localhost:4444/api/rest
```
    Example REST Endpoint for which Swagger was implemented
```

#### Hosted Swagger Endpoint

https://localhost:4444/swagger
```
    Example Swagger endpoint
```

#### PDF File Generation Endpoint

https://localhost:4444/pdf
```
    View a PDF of the generated Swagger!
```

# How Do I Use This?

```bash
    $ npm run install
    $ npm run build
    $ npm run start
```

# Licensing and Use

MIT Licensed.
