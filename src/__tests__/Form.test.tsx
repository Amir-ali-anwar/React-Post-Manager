import { render, screen } from "@testing-library/react";
import Form from "../components/Form";
import userEvent, {type UserEvent } from "@testing-library/user-event";

export const getFormElements = () => {
  return {
    input: screen.getByRole("textbox", { name: /title/i }),
    button: screen.getByRole("button", { name: /add post/i }),
  };
};

describe('Form Component', () => {
    const mockOnSubmit = vi.fn();
    let user: UserEvent
    beforeEach(()=>{
        user= userEvent.setup()
        mockOnSubmit.mockClear()
        render(<Form  onSubmit={mockOnSubmit}/>)
    })
    test('Renders Form Elements correctly',()=>{
        const {input,button}= getFormElements()
        expect(input).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })
})