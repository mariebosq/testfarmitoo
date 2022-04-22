<?php

namespace App\Tests\Form\Type;

use App\Form\OrderType;
use App\Entity\Contact;
use Symfony\Component\Form\Test\TypeTestCase;

class OrderTypeTest extends TypeTestCase
{
    public function testSubmitValidData()
    {
        $formData = [
            'Nom' => 'Marie',
            'Adresse' => [
                'AdresseLigne1'=> '17 rue des templiers',
                'AdresseLigne2'=> 'Appartement 243',
                'Ville' => 'Paris',
                'Pays' => 'France',
                'codePostal' => '58000'
            ],
            'E-mail' => 'bosq.marie@gmail.com'
        ];

        $model = new Contact();
       
        $form = $this->factory->create(OrderType::class, $model);

        $expected = new Contact();
        $form->submit($formData);

        $this->assertTrue($form->isSynchronized());

        $this->assertEquals($expected, $model);
    }

}