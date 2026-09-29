# Practical 01: Angular Theory - Components, Data Binding & Services

## Assignment No. 1

**Sub:** Full Stack Development  
**Date:** 06-08-2025

---

### Q.1. Explain the role of components in Angular. How do components interact to build a complete application?

**Answer:**

Components are the fundamental building blocks of Angular applications. Each component controls a patch of screen called a view.

**Role of Components:**
- A component is a TypeScript class decorated with `@Component` decorator
- It consists of three parts: **Template** (HTML view), **Class** (TypeScript logic), and **Metadata** (decorator configuration)
- Components define the UI and handle user interactions
- They encapsulate data, logic, and presentation in a reusable unit

**How Components Interact:**
- Components are organized in a tree structure (parent-child relationship)
- Parent components pass data to child components using `@Input()` decorators
- Child components emit events to parent components using `@Output()` decorators and `EventEmitter`
- Services and Dependency Injection are used for sharing data between unrelated components
- The root component (`AppComponent`) bootstraps the entire application

---

### Q.2. What is data binding in Angular? Describe the different types of data binding with examples.

**Answer:**

Data binding is a mechanism that synchronizes data between the component class (TypeScript) and the template (HTML). It allows communication between the view and the logic.

**Types of Data Binding:**

| Type | Direction | Syntax | Example |
|------|-----------|--------|---------|
| **Interpolation** | Class → View | `{{ expression }}` | `{{ username }}` |
| **Property Binding** | Class → View | `[property]="expression"` | `[value]="name"` |
| **Event Binding** | View → Class | `(event)="handler()"` | `(click)="onClick()"` |
| **Two-way Binding** | Class ↔ View | `[(ngModel)]="property"` | `[(ngModel)]="name"` |

**Examples:**

```html
<!-- Interpolation -->
<p>Hello, {{ username }}!</p>

<!-- Property Binding -->
<input [value]="username">

<!-- Event Binding -->
<button (click)="save()">Save</button>

<!-- Two-way Binding -->
<input [(ngModel)]="username">
```

---

### Q.3. What are Angular services and dependency injection? Why are they important in Angular applications?

**Answer:**

**Services:**
- Services are classes that provide specific functionality across an application
- They are used for sharing data, business logic, and API calls between components
- Services are decorated with `@Injectable()` decorator
- Example: `DataService`, `AuthService`, `LoggerService`

**Dependency Injection (DI):**
- DI is a design pattern where a class receives its dependencies from external sources rather than creating them itself
- Angular's DI framework provides declared dependencies to a class when it is instantiated
- Dependencies are provided at module level, component level, or root level

**Why They Are Important:**
- **Reusability:** Services can be shared across multiple components
- **Separation of Concerns:** Business logic is separated from UI logic
- **Testability:** Services can be easily mocked for unit testing
- **Maintainability:** Centralized code is easier to maintain and update
- **Singleton Pattern:** Services are typically singletons, ensuring consistent state

```typescript
@Injectable({ providedIn: 'root' })
export class StudentService {
  getStudents() { /* ... */ }
}
```
