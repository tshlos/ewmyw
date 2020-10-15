class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :podcast_id

  # belongs_to :user
  # belongs_to :podcast
end