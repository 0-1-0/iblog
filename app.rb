require 'sinatra'
require 'slim'
require 'haml'
require "digest/sha1"
require 'dm-core'
require 'dm-validations'
require 'dm-timestamps'
require 'dm-migrations'
require "sinatra-authentication"

#for authentification
use Rack::Session::Cookie, :secret => '3daystospace'



################rounting##########################

get '/' do
  @posts = Post.all(:order => [ :id.desc ], :limit => 20)
  slim :index
end


# get '/articles/:id/edit' do |id|
#   @article = Article.get!(id)
#   erb :'articles/edit'
# end

post '/' do
  post = Post.new(params[:post])  
  post.save
  redirect '/'
end

put '/:id' do |id|
  post = Post.get!(id)
  success = post.update!(params[:post])
  redirect '/'
end

delete '/:id' do |id|
  post = Post.get!(id)
  post.destroy!
  redirect '/'
end

post '/:id/comment' do |id|
  comment = Comment.new(params[:comment])
  comment.post_id = id
  comment.save
  redirect '/'
end


get '/rss' do
  @posts = Post.all(:order => [ :id.desc ], :limit => 20)
  content_type 'application/rss+xml'
  slim :rss
end

##################################################



###################Datamapper#####################
DataMapper.setup(:default, ENV['DATABASE_URL'] || 'postgres://developer:123@localhost/iblog')

class Post
  include DataMapper::Resource
  property :id,       Serial
  property :content,  Text   , :lazy => [ :show ]

  has n, :comments
end

class Comment
  include DataMapper::Resource
  property :id,       Serial
  property :content,  Text   , :lazy => [ :show ]
  property :post_id,  Serial

  belongs_to :post
end

DataMapper.auto_upgrade!

#################################################

#Helpers
helpers do

  def link_to(url,text=url)
    "<a href=\"#{url}\" >#{text}</a>"
  end

  def css(url)
    "<link rel='stylesheet' href='/#{url}.css'>"
  end

  def js(url)
    "<script type='text/javascript' src='/#{url}.js' ></script>"
  end

  def image(url)
    "<img src=#{url}>"
  end

end
