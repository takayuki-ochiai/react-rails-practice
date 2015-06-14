class BooksController < ApplicationController
  before_action :set_book, only: [:show, :destroy, :edit, :update]
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

  def edit
    render json: @book
  end

  # POST /books
  def create
    @book = Book.new(book_params)
    @book.save
    render json: @book
  end

  # DELETE /books/:id
  def destroy
    @book.destroy
    render json: @book
  end

  # PATCH/PUT /books/:id
  def update
    @book.update(book_params)
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
