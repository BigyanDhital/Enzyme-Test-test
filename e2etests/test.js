/* global describe, it, browser */
import { shallow } from "enzyme";
import React from "react";
import AddTodo from "../src/components/addTodo/index";

const { expect } = require("chai");

describe("TodoList App", () => {
  it("Should load with the right title", () => {
    browser.url("http://localhost:3000/");
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql("Todo List");
  });

  it("Should allow me to create a Todo", () => {
    const todoText = "Get better at testing";
    browser.url("http://localhost:3000/");
    browser.element(".todo-input").setValue(todoText);
    browser.click(".todo-submit");
    const actual = browser.element(".todo-text").getText();

    expect(actual).to.equal(todoText);
  });

  it("Should allow me to delete a Todo", () => {
    const todoText = "Get better at testing";
    browser.url("http://localhost:3000/");
    browser.element(".todo-input").setValue(todoText);
    browser.click(".todo-submit");
    browser.click(".todo-delete");
    const actual = browser.element(".todo-text");

    expect(actual.state).to.equal("failure");
  });
});

describe("AddTodo component", () => {
  it("Should render successfully", () => {
    const component = shallow(<AddTodo />);
    expect(component.exists()).toEqual(true);
  });

  it("Should have one input", () => {
    const component = shallow(<AddTodo />);
    expect(component.find(".todo-input").length).toEqual(1);
  });

  describe("Add todo button", () => {
    it("Should exist", () => {
      const component = shallow(<AddTodo />);
      expect(component.find(".todo-submit").length).toEqual(1);
    });
  });
});
