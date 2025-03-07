//Публичная ф-я
<?php 
   class Mouse{
      public $string = 'Mish';
      public function Name(){
         return $this->string;
      }
   }
   
   $a = new Mouse;
   $b = $a->Name();
   echo $b;
?>

//Приватная ф-я
<?php 
   class Mouse{
      private function Name(){
         return 'Мышь';
      }
   }
   
   $a = new Mouse;
   $b = $a->Name();
   echo $b;
?>  

^
| выведет ошибку 

