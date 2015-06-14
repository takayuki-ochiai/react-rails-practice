class BooksController < ApplicationController
  before_action :set_book, only: [:show]
  def index
    @books = Book.all

    respond_to do |format|
      format.html
      format.json { render json: @books }
    end
  end

  def show
    render json: @book
  end

  # POST /books
  def create
    binding.pry
    @book = Book.new(book_params)
    @book.save
    render json: @book
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def book_params
      params.require(:book).permit(:title, :publish, :published)
    end
end
