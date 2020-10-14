class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :favorites, :playlists

  # has_many :favorites
  # has_many :podcasts, through: :favorites
  # has_many :playlists

  def favorites
    ActiveModel::SerializableResource.new(object.favorites, each_serializer: FavoriteSerializer)
  end

  def playlists
    ActiveModel::SerializableResource.new(object.playlists, each_serializer: PlaylistSerializer)
  end
end
