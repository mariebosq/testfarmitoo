<?php


namespace App\Entity;


class Order
{
    /**
     * @var array
     */
    protected $items;

     /**
     * @param array $items
     */
    public function __construct(array $items)
    {
        $this->items = $items;
    }
    /**
     * @return array
     */
    public function getItems(): array
    {
        return $this->items;
    }


} 