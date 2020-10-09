class PodcastSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :url, :publisher,
   :total_episodes, :category, :show_id 

  has_many :users
  has_many :topics
  has_many :podcast_topics, through: :topics
end
