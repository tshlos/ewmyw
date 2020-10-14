class CreatePodcasts < ActiveRecord::Migration[6.0]
  def change
    create_table :podcasts do |t|
      t.string :podcast_id

      t.timestamps
    end
  end
end
