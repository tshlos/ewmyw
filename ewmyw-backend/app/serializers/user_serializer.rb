class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email

  has_many :favorites
  # has_many :podcasts, through: :favorites
  has_many :playlists
end
