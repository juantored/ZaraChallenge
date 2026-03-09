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
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search for a smartphone..."
        value={search}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {/* Botón de limpiar */}
      {value && !isFocused && (
        <button onClick={handleClear} aria-label="Clear search">
          ×
        </button>
      )}
    </div>
  );
}
export default SearchBar;
