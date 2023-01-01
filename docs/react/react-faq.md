---
title: React FAQ
tags:
    - frontend
    - react
---

# React FAQ

Categorized questions to help with some of the more advanced intracacies of React. When opinions, and not facts, are presented, it is noted.

#### Referential Equality

##### Q. What is referential equality, how is it different from other equalities, and why is it important in React?

-   Referential equality means the object maintains, as opposed to creates anew, a reference through whatever actions are occurring.
-   Strict equality in Javascript, or ===, uses EXACT equality for primitives ('string' === 'string'), or REFERENTIAL equality for objects/arrays ([1,2,3] !== [1,2,3]). React uses this exact same logic to determine if something changed.
-   "Something changed" is the most important concept in React (hence the name). When something changes within a component, that component re-renders.
    -   The most dangerous situation you can encounter is when something creates a render loop. This is when "something changed" causes another change in an infinite cycle. (see Dependency Array section for defense of this)
-   React has various tools to control referential equality built in. (See the useMemo / useCallback section for more details)
-   "Render safety", a phrase I made up, is shorthand for "correctly handles referential equality so that all downstream components can rely on the output".

#### React Hooks

##### Custom React Hooks

###### Q. How should I think about custom React hooks in general?

-   Hooks are 100% identical to functions aside from one fact: they can also access the native react hooks (useState, useMemo, etc).
-   Because of this, they are also tested differently.
-   You should use custom hooks in the exact same way you would use functions that you call inside other functions (naming, easier understanding, encapsulation, reuse, etc). Feel free to nest several, or put a couple in a file with only one "public" one.

###### Q. Should I use a custom hook or should I build a Context?

-   This question should be answered identically to "Should I build a context, or should I just do things inside my component?"
    -   (Personal Opinion) If you plan on needing these items more than 3 components down (prop drill), use a context.
    -   If you need these items widely in a horizontal fashion (one component has no common parent to the other), use a context.
    -   In all other situations, use hook(s).
    -   A hook is easier to convert to a Context than vice-versa.

##### React Hook Dependency Arrays

###### Q. Why am I forced to populate dependency arrays when [fill in the blank] works as well? (Exhaustive Dependencies ESLint Rule)

-   Kent C. Dodds says it well in [Pitfall 2](https://kentcdodds.com/blog/react-hooks-pitfalls#pitfall-2-not-using-or-ignoring-the-eslint-plugin).
-   Basically, even though something works well right now, doesn't mean it is future-proof. Placing every dependency into the array future-proofs it.
-   If you are finding that adding to the array has changed how it works, add conditionals until it runs how it should.

```typescript
useEffect(() => {
    if (thingThatWillMakeThisOnlyFireOnce) {
        fire();
    }
}, [thingThatWillMakeThisOnlyFireOnce]);
```

###### Q. What about a blank dependency array, I only want it to run initially, so I'm good there, right?

-   A blank dependency array (when you have actual dependencies, not always the case) shares all the same downsides as a limited dependency array. Works today, maybe not tomorrow.
-   The solution is the same, add a conditional. If you have no condition easily available to determine "initial", create one and then change it once you have ran your condition.

```
const [isInitialRender, setIsInitialRender] = useState(true);
```

##### useMemo / useCallback

###### Q. When should I useMemo and when should I useEffect + useState?

-   useMemo (or possibly just creating an object) is nearly always the answer. useMemo performs better than useState + useEffect at 1 render per use.
    -   If you are downstream from useQuery, nearly always useMemo. react-query's queryCache is your state.
    -   If you are downstream from state you control, useMemo.
-   If you are in a situation where you are creating data from a non-api-call, and you are the source of truth, this is a great use case for useEffect + useState. (~1% of the time)

###### Q. I read an article telling me not to useMemo, are they right?

-   Generally these fall into a few categories.
    -   The article is actually about React.memo and useMemo got thrown in somehow. React.memo is the FunctionComponent equivalent of PureFunction and should be used sparingly.
    -   The article is written by someone who is managing an extremely mature, stable React environment, and every performance profiling millisecond counts. If we ever get to this point, I will revise this answer, but it is unlikely. For us, we should value safety to not infinite loop over a few milliseconds.
        -   [Kent C. Dodds getting into the minutia of exactly when and how](https://kentcdodds.com/blog/usememo-and-usecallback), for those who are interested in 100% maximization.

###### Q. Do I need to wrap [fill in the blank] in a hook, or can I just create a [non-wrapped same fill in the blank]? (useCallback for functions, useMemo for objects)

-   These hooks are tools to maintain or break referential equality when you desire. If you do not wrap, a new version (breaking referential equality) is created every render.
-   This answer is heavily dependent on where you are in the render tree.
    -   If you are in the child-most component of your domain, you definitely DO NOT need to wrap anything in a hook. There is nothing downstream from you at risk.
    -   If you are in a global context, you definitely almost always DO need to wrap everything in a hook. There are untold amounts of downstream resources expecting you to handle this well.
    -   If you are in between, use your discretion, but when it doubt, wrap it.
-   (useMemo specific) This can also depend on what you RETURN from the useMemo. If it is a primitive (string, number, boolean), you DO NOT need to wrap in a useMemo unless the calculation is expensive.

##### Misc

###### Q. why (if it is) is it better to use a ternary for a conditional render than a short circuit?

`isTrue ? <Component /> : null`
vs.
`isTrue && <Component />`

https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx

Basically its an edge case, but better safe than sorry. Sorry being having a random falsy value on the screen.

### User Experience (UX)

#### Forms

-   [Checkbox vs Toggle Switch](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8)
