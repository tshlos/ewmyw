class PodcastSerializer < ActiveModel::Serializer
  attributes :id, :podcast_id
  
  has_many :users
  has_many :topics
  has_many :podcast_topics, through: :topics
end
