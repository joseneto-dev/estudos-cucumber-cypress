Feature: Calculadora

    Como usuario, desejo utilizar a calculadora 
    Para que possa conferir minhas contas
@focus 
Scenario: Calcular uma soma de valores
    Given que eu acesso a calculadora
    And desejo realizar uma "soma"
    When informar os valor "2" e "2"
    And finalizar a conta 
    Then devo obter o resultado "4"

Scenario Outline: Calcular uma <operacao> de valores
    Given que eu acesso a calculadora
    And  desejo realizar uma "<operacao>"
    When informar os valor "<num1>" e "<num2>"
    And finalizar a conta 
    Then devo obter o resultado "<resultado>"
   Examples:
       | operacao      | num1 | num2 |resultado |
       | soma          | 1    | 3    |4         | 
       | divisão       | 9    | 2    |4.5       | 
       | subtração     | 4    | 3    |1         |
       | multiplicação | 3    | 3    |9         |
       
