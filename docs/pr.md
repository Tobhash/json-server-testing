# 📋 Pull Request Checklist

Przed utworzeniem Pull Request upewnij się, że spełnione są wszystkie poniższe kryteria:

---

## ✅ Kod i Jakość

- [ ] **Kod kompiluje się bez błędów**

  ```bash
  npm run build
  ```

- [ ] **Wszystkie testy przechodzą**

  ```bash
  npm test
  ```

- [ ] **Linter nie zgłasza błędów**

  ```bash
  npm run lint
  ```

- [ ] **Kod jest czytelny i zrozumiały**
  - Nazwy zmiennych, funkcji i klas są opisowe
  - Funkcje są krótkie i robią jedną rzecz
  - Brak zagnieżdżeń głębszych niż 3 poziomy

- [ ] **Nazewnictwo jest jasne i konsekwentne**
  - camelCase dla zmiennych i funkcji
  - PascalCase dla klas i interfejsów
  - UPPER_SNAKE_CASE dla stałych
  - Pliki nazwane zgodnie z konwencją projektu

- [ ] **Nie ma duplikacji kodu (DRY)**
  - Wspólna logika wydzielona do funkcji pomocniczych
  - Używany BaseRepository dla operacji CRUD
  - Reużywalne utilities w osobnych modułach

---

## 🏛️ Zasady SOLID

- [ ] **Single Responsibility Principle**
  - Każda klasa/funkcja ma jedną odpowiedzialność
  - Repository classes odpowiadają tylko za komunikację z API
  - Validators odpowiadają tylko za walidację
  - Fixtures odpowiadają tylko za generowanie danych

- [ ] **Open/Closed Principle**
  - Nowa funkcjonalność dodana przez rozszerzenia (extend), nie modyfikacje
  - BaseRepository nie był modyfikowany, tylko rozszerzany

- [ ] **Liskov Substitution Principle**
  - Klasy dziedziczące mogą zastąpić klasy bazowe
  - Implementacje interfejsów są podstawialne

- [ ] **Interface Segregation Principle**
  - Interfejsy są małe i wyspecjalizowane
  - Klasy nie implementują niepotrzebnych metod

- [ ] **Dependency Inversion Principle**
  - Zależności od abstrakcji (interfejsów), nie konkretnych klas
  - Dependency injection jest stosowane gdzie możliwe

---

## 🎨 Wzorce Projektowe

- [ ] **Repository Pattern jest stosowany**
  - API calls są wykonywane przez repository classes
  - Repository dziedziczy z BaseRepository
  - Interfejsy dla modeli są zdefiniowane

- [ ] **Data-Driven Testing (jeśli dotyczy)**
  - Dane testowe w fixtures lub plikach JSON
  - Testy są parametryzowane dla różnych zestawów danych

- [ ] **Builder Pattern (jeśli dotyczy)**
  - Złożone obiekty budowane przez builders
  - Builders oferują fluent interface

---

## 📘 TypeScript

- [ ] **Typy TypeScript są prawidłowo zdefiniowane**
  - Brak użycia `any` (używamy `unknown` jeśli typ rzeczywiście nieznany)
  - Wszystkie funkcje mają typy zwracanych wartości
  - Wszystkie parametry mają typy
  - Interfejsy dla request/response models

- [ ] **Strict mode jest przestrzegany**
  - Kod kompiluje się z `"strict": true` w tsconfig.json
  - Null checks są wykonywane gdzie potrzebne
  - Optional chaining (`?.`) używany odpowiednio

- [ ] **Używane są odpowiednie typy utility**
  - `Partial<T>`, `Pick<T>`, `Omit<T>` etc. gdzie sensowne
  - Union types dla ograniczonego zbioru wartości
  - Generics dla reużywalnych komponentów

---

## 🧪 Testy

- [ ] **Dodano testy dla nowej funkcjonalności**
  - Każda nowa funkcja ma przynajmniej jeden test
  - Happy path jest przetestowany
  - Edge cases są przetestowane
  - Error handling jest przetestowany

- [ ] **Testy są niezależne i powtarzalne**
  - Każdy test tworzy własne dane testowe
  - Testy nie zależą od siebie nawzajem
  - Testy można uruchomić w dowolnej kolejności
  - Cleanup jest wykonywany (afterEach/afterAll)

- [ ] **AAA Pattern jest stosowany**
  - Arrange, Act, Assert są wyraźnie oddzielone
  - Sekcje wizualnie oddzielone pustymi liniami lub komentarzami

- [ ] **Nazwy testów są opisowe**
  - Format: `should [expected behavior] when [condition]`
  - Nazwa jasno komunikuje co test sprawdza
  - Używany jest `test.describe()` dla grupowania

- [ ] **Assertions są konkretne**
  - Używane są specific matchers (np. `toBeGreaterThan()` zamiast `toBeTruthy()`)
  - Sprawdzane są wszystkie istotne aspekty
  - Error messages są czytelne

---

## 📝 Dokumentacja

- [ ] **JSDoc comments dla funkcji publicznych**
  - Każda publiczna funkcja/metoda ma JSDoc
  - Zawiera opis parametrów (`@param`)
  - Zawiera opis zwracanej wartości (`@returns`)
  - Zawiera informacje o rzucanych błędach (`@throws`)
  - Zawiera przykład użycia (`@example`)

- [ ] **README jest aktualny**
  - README.md projektu jest zaktualizowany o nową funkcjonalność
  - Dodano instrukcje jeśli potrzebne
  - Zaktualizowano diagramy/schematy jeśli dotyczy

- [ ] **Komentarze inline używane mądrze**
  - Komentarze wyjaśniają "dlaczego", nie "co"
  - Brak oczywistych komentarzy
  - TODO/FIXME z numerami issues jeśli dotyczy

- [ ] **Dokumentacja API endpoints (jeśli dotyczy)**
  - Nowe endpointy są udokumentowane
  - Request/response examples są dodane

## 🔒 Bezpieczeństwo

- [ ] **Brak wrażliwych danych w kodzie**
  - Żadnych API keys, tokenów, haseł
  - Credentials są w `.env` (nie commitowane)
  - `.env.example` jest zaktualizowany
  - Brak hardcoded URLs (używamy config)

- [ ] **Dependencies są bezpieczne**
  - `npm audit` nie pokazuje critical/high vulnerabilities
  - Używane są aktualne wersje bibliotek

## 📁 Struktura Projektu

- [ ] **Pliki są w odpowiednich katalogach**
  - Testy w `playwright-ts/tests/api/` lub `playwright-ts/tests/e2e/`
  - Repositories w `playwright-ts/repositories/`
  - Models w `playwright-ts/models/`
  - Fixtures w `playwright-ts/fixtures/`
  - Utils w `playwright-ts/utils/`

- [ ] **Imports są czyste**
  - Brak nieużywanych importów
  - Imports są posortowane (alfabetycznie lub logicznie)
  - Używane są ścieżki względne zgodnie z konwencją

---

## ✨ Final Check

- [ ] **Kod przeszedł self-review**
  - Przeczytałem cały diff przed utworzeniem PR
  - Usunąłem console.logs i debugowanie code
  - Sprawdziłem formatowanie i wcięcia

- [ ] **Lokalnie wszystko działa**
  - Projekt buduje się lokalnie
  - Wszystkie testy przechodzą lokalnie
  - Manualne testy (jeśli dotyczy) przeszły

- [ ] **PR jest gotowy do review**
  - Tylko relevantne zmiany są w PR
  - Brak zmian formatowania niepowiązanych z feature
  - PR nie jest za duży (max ~500 linii jeśli możliwe)

---

## 📝 PR Template

```markdown
## opis

<!-- Krótko opisz co zostało zmienione i dlaczego -->

## Typ zmiany

- [ ] Feature (nowa funkcjonalność)
- [ ] Bugfix (poprawka błędu)
- [ ] Refactoring (zmiana bez wpływu na funkcjonalność)
- [ ] Tests (dodanie lub modyfikacja testów)
- [ ] Documentation (zmiany w dokumentacji)
- [ ] Chore (dependencies, config itp.)

## Related Issue

Closes #[issue number]

## Testy

<!-- Opisz jakie testy zostały dodane/zmodyfikowane -->

- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests
- [ ] Manual tests

## Screenshots / Logi

<!-- Jeśli dotyczy -->

## Checklist

- [ ] Przeszedłem przez pełną checklistę w docs/pr.md
- [ ] Kod jest zgodny z instrukcjami w copilot-instructions.md
- [ ] Wszystkie testy przechodzą
- [ ] Dokumentacja jest aktualna
- [ ] Self-review wykonany
```

---

**Uwaga:** Ta checklista jest wytyczną, nie wszystkie punkty muszą być spełnione w każdym PR, ale powinny być świadomie rozważone.

**Sukces:** Jeśli wszystkie relevantne punkty są zaznaczone, Twój PR jest gotowy do review! 🎉
