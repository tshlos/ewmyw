class CreatePodcastPlaylists < ActiveRecord::Migration[6.0]
  def change
    create_table :podcast_playlists do |t|
      t.references :podcast, null: false, foreign_key: true
      t.references :playlist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
