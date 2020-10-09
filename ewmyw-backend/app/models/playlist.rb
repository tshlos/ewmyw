class Playlist < ApplicationRecord
  belongs_to :user
  has_many :podcast_playlists
  has_many :podcasts, through: :podcast_playlists
end
