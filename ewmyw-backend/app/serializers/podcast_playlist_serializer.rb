class PodcastPlaylistSerializer < ActiveModel::Serializer
  attributes :id, :podcast_id, :playlist_id

  belongs_to :podcast
  belongs_to :playlist
end
