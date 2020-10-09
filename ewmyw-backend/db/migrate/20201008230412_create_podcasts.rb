class CreatePodcasts < ActiveRecord::Migration[6.0]
  def change
    create_table :podcasts do |t|
      t.string :name
      t.string :show_id
      t.text :description
      t.string :url
      t.string :image
      t.string :publisher
      t.integer :total_episodes
      t.string :category

      t.timestamps
    end
  end
end
