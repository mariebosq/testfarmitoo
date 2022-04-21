<?php
namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class PostalAddressType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('AdresseLigne1', TextType::class, [
                'attr' => ['class' => 'form-control']
            ])
            ->add('AdresseLigne2', TextType::class, [
                'required'   => false,
                'attr' => ['class' => 'form-control']
            ])
            ->add('Ville', TextType::class, [
                'attr' => ['class' => 'form-control']
            ])
            ->add('Pays', TextType::class, [
                'label' => 'Pays',
                'attr' => ['class' => 'form-control']
            ])
            ->add('codePostal', TextType::class, [
                'label' => 'Code Postal',
                'attr' => ['class' => 'form-control']
            ])
        ;
    }
}