module ApplicationHelpers

  def background_image(path)
    "background-image: url('#{image_path(path)}')"
  end
end
