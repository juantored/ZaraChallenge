import { createContext, useContext, useState, type ReactNode } from "react";

type ErrorContextType = {
  showError: (message: string) => void;
};

// Creamos el contexto que se usara de forma global
const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

type ErrorProviderProps = {
  children: ReactNode;
};

// Provider que comparte el estado con toda la aplicacion
export function ErrorProvider({ children }: ErrorProviderProps) {
  const [error, setError] = useState<string | null>(null);

  // Metodo para añadir el texto del error
  const showError = (message: string) => {
    setError(message);
  };

  // Metodo para quitar el modal de error
  const closeError = () => {
    setError(null);
  };

  return (
    //Todos los hijos que esten debajo de ErrorProvider podrán lanzar la modal de error
    <ErrorContext.Provider value={{ showError }}>
      {children}

      {error && (
        <div className="errorOverlay">
          <div className="errorModal">
            <h3 className="errorTitle">Error</h3>
            <p className="errorMessage">{error}</p>
            <button className="errorButton" onClick={closeError}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </ErrorContext.Provider>
  );
}

// Creamos un hook para evitar usar el useContext siempre que se quiera importar
export function useError() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("Error al recuperar el contexto de ErrorProvider");
  }
  return context;
}
