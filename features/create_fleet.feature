Feature: Create a fleet

    In order to be able to register cars
    As an application user
    I should be able to create my fleet

    @critical
    Scenario: Successfully create a fleet
        Given a user id 1
        When I create a fleet
        Then return the new fleet id