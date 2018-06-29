# Jekyll Example

### Installation

1. <a href="https://www.ruby-lang.org/en/">Ruby</a></li>
2. <a href="https://rubygems.org/pages/download#formats">RubyGems</a>
3. <a href="https://jekyllrb.com/">Jekyll</a>

Make sure to stay below **Ruby 2.5.0** to avoid some dependency conflicts!

Installation will likely entail:
 
 1. Downloading and running the Ruby installer (try **2.3.1**).
 2. Downloading and unzipping the RubyGem install files.
 3. Running `$ ruby setup.rb` from your unzipped RubyGem directory.
 4. Running `$ gem install bundler jekyll -v 3.6.2`.
 
On Linux, you may also need to add to `.bashrc`:

```bash
# Ruby exports

export GEM_HOME=$HOME/gems
export PATH=$HOME/gems/bin:$PATH
```

For a more thorough setup please check out the supplied Linux Bash script!

Cheers!

### CLI

Create project root:
```bash
    jekyll new blog
```

Serve Via Jekyll Server and Navigate:
```bash
  $ bundle install
  $ bundle exec jekyll serve
  # http://127.0.0.1:4000/
```

### Resources and Shout-Outs

- [Using Webpack and React with Jekyll](https://medium.com/allizad/)
- [Jekyll-Rails](https://www.sitepoint.com/jekyll-rails/)
