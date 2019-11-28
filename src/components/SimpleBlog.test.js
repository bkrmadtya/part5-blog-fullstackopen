import React from "react";
import { render } from "@testing-library/react";

import SimpleBlog from "./SimpleBlog";

describe("<SimpleBlog />", () => {
  let component;

  const sampleBlog = {
    title: "New testing book",
    author: "Jon Doe",
    likes: 5
  };

  const mockHandler = jest.fn();

  beforeEach(() => {
    component = render(<SimpleBlog blog={sampleBlog} onClick={mockHandler} />);
  });

  test("blog title is displayed correct", () => {
    expect(component.container).toHaveTextContent(sampleBlog.title);
  });

  test("blog author is displayed correct", () => {
    expect(component.container).toHaveTextContent(sampleBlog.author);
  });

  test("blog likes is displayed correct", () => {
    const result = "blog has " + sampleBlog.likes + " likes";
    expect(component.container).toHaveTextContent(result);
  });
});
