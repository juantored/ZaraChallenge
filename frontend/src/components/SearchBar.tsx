import { useEffect, useState, type ChangeEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  delay?: number;
};

function SearchBar({ value, onChange, delay = 300 }: SearchBarProps) {
  const [search, setSearch] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  // Lanza la peticion onChange
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Limpia el contenido del input
  const handleClear = () => {
    setSearch("");
  };

  // Comprobaciones si estamos haciendo focus al input o dejamos de hacerlo
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Se usa un timeout para evitar llamar el onChange por cada caracter escrito
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(search);
    }, delay);

    return () => clearTimeout(timeout);
  }, [search, delay, onChange]);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        type="text"
        placeholder="Search for a smartphone..."
        value={search}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          width: "100%",
          padding: "8px 32px 8px 8px",
          fontSize: 16,
          borderRadius: 4,
          border: "1px solid #ccc",
          boxSizing: "border-box",
        }}
      />

      {/* Botón de limpiar */}
      {value && !isFocused && (
        <button
          onClick={handleClear}
          style={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: 16,
            color: "#999",
            padding: 0,
            lineHeight: 1,
          }}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
export default SearchBar;
