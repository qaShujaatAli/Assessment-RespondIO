# 01Login.feature
Feature: 01 Respond Dashboard Feature

    @LOGIN
    Scenario: Verify existing Respond IO user must be Logged in successfully
    Given   [LOGIN] User Launches Respond IO App
    When    [LOGIN] User Enters UserName "qa.shujaatali@gmail.com"
    When    [LOGIN] User Enters Password "tropicalRespond@123"
    When    [LOGIN] User clicks Sign in
    Then    [LOGIN] User must be Logged in successfully

    @WORKFLOW
    Scenario: Verify user is able to invite Workflow user
    Given   [Add Workflow User] User clicks on Workflow icon
    Then    [Add Workflow User] User clicks on Users icon
    Then    [Add Workflow User] User clicks on Add User icon

    Then    [Add Workflow User] User adds email "testrespondagent+102@maildrop.cc" to invite user
    Then    [Add Workflow User] User taps on Submit
    Then    [Add Workflow User] Verify User is invited successfully

