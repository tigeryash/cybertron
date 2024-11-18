type InputProps = {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Input = ({ input, handleInputChange, handleSubmit }: InputProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
        value={input}
        placeholder="Say something..."
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Input;
