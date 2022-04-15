<?php

namespace App\Form;

use App\Entity\Promotion;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class PromotionType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('codepromo', TextType::class, [
            'attr' => ['class' => 'form-control rounded-pill p-3 input-code-promo',
                        'id' => 'codepromo']
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Promotion::class
        ]);
    }
}