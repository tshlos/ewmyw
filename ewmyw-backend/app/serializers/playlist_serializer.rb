class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id

  belongs_to :user
  has_many :podcast_playlists
  has_many :podcasts, through: :podcast_playlists
end
