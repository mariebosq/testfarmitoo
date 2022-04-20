<?php


namespace App\Entity;


class Item
{
    /**
     * @var Product
     */
    protected $product;

    /**
     * @var int
     */
    protected $quantity;

    /**
     * @param Product $product
     * @param int $quantity
     */

    public function __construct(Product $product, int $quantity)
    {
        $this->product = $product;
        $this->quantity = $quantity;
    }

    /**
     * @return Product
     */
    public function getProduct(): Product
    {
        return $this->product;
    }

    /**
     * @return int
     */
    public function getQuantity(): int
    {
        return $this->quantity;
    }
}
