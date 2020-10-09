class PodcastPlaylist < ApplicationRecord
  belongs_to :podcast
  belongs_to :playlist
end
