require 'sinatra'
require 'slim'


get '/' do
   slim :index
end

#DB setup
require 'dm-core'
require 'dm-validations'
require 'dm-timestamps'
require 'dm-migrations'
DataMapper.setup(:default, ENV['DATABASE_URL'] || 'postgres://developer:123@localhost/iblog')

#DM Models
class Post
  include DataMapper::Resource

  property :id,       Serial
  property :title,    String
  property :body,     Text   , :lazy => [ :show ]
  property :published,Boolean, :default  => false
  
  timestamps :at
end

DataMapper.auto_upgrade!



#Helpers
helpers do

  def link_to(url,text=url)
    "<a href=\"#{url}\" >#{text}</a>"
  end

  def css(name)
    "<link rel='stylesheet' href='/#{name}.css'>"
  end

  def image(url)
    "<img src=#{url}>"
  end

end
