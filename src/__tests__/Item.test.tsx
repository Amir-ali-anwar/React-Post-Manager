import { render, screen,cleanup } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import { type Post } from "../hooks/usePost";
import Item from "../components/Item";
import server from "../mocks/server";

const mockPost: Post = {
  id: "1",
  title: "testing library",
  likes: 4,
};
const mockOnLike = vi.fn();
const mockOnDelete = vi.fn();
describe("Form Component", () => {
    let user: UserEvent;
    beforeEach(() => {
        user = userEvent.setup();
        vi.clearAllMocks()
        render(<Item post={mockPost} onLike={mockOnLike} onDelete={mockOnDelete} />)
       });
      test("Renders Form Elements correctly", () => {
        expect(screen.getByText('testing library')).toBeInTheDocument()
      })
      test('displays correct number of likes', () => {
        expect(screen.getByText(`👍 ${mockPost.likes}`)).toBeInTheDocument();
      });
});
