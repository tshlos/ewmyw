class User < ApplicationRecord
    has_many :favorites
    has_many :podcasts, through: :favorites
    has_many :playlists

    has_secure_password
    validates :email, presence: true
    validates :email, uniqueness: true
end
