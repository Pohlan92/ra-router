export const Button = ({ children, onClick }) => {
  return (
    <button className="post_controls_btn" type="button" onClick={onClick}>
      {children}
    </button>
  );
};
