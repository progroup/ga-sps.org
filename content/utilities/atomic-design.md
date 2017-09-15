# Intro to Atomic Design

> Atomic design is a methodology used to construct web design systems.

There are five distinct stages in atomic design: **atoms**, **molecules**, **organisms**, **templates**, **pages**

<!-- 
[Read more...][atomic-design]
 -->

[atomic-design]: /atomic-design

### atoms

In chemistry, atoms are the basic building blocks of matter. They have distinct properties and can't be broken down further without losing their meaning.

Translated to interfaces, **atoms are basic tags**, such as [form labels][], [inputs][] or [buttons][]. They also include more abstract elements like [color palettes][colors], [fonts][typography], and [animations][].

Atoms are abstract and aren't often terribly useful on their own, but they provide a useful reference and allow you to see all your global styles laid out at a glance.

[form labels]: /atoms/forms/#labels
[inputs]: /atoms/forms/#inputs
[buttons]: /atoms/buttons
[colors]: /atoms/colors
[typography]: /atoms/typography
[animations]: /atoms/animations

## molecules

In chemistry, molecules are groups of atoms bonded together, which take on new properties as a result.

In interfaces, molecules are **groups of elements that function together as a unit.** For example, a form label, search input, and button atom can combine together to form a [search form][search-form] molecule.

[search-form]: /molecules/search-form

Building up from atoms to molecules encourages a "do one thing and do it well" mentality, and encourages creating reusable interface patterns.

## organisms

Organisms are **groups of molecules (and possibly atoms) joined together to form distinct section of an interface.**

Organisms can consist of similar and/or disparate molecule types. For example, a [masthead][masthead] organism might consist of a [logo][logo], [navigation][navigation], and [search form][search-form], while a "[product grid][product-grid]" organism might consist of the same [product info][product-info] molecule repeated over and over.

[masthead]: /organisms/masthead
[navigation]: /organisms/navigation
[logo]: /organisms/logo
[product-grid]: /organisms/product-grid
[product-info]: /organisms/product-info

Building up from molecules to organisms encourages creating standalone, portable, reusable components.

## templates

With templates, we break our biochemistry analogy to get into language that makes more sense to clients and final output. **Templates are comprised mostly of organisms combined together to form page-level objects.**

Templates provide context for these relatively abstract molecules and organisms, which is helpful for designers and clients alike.

Templates mostly focus on content structure (such as character-length, image size, etc) rather than the actual content.

## pages

Pages are specific instances of templates and swap out placeholder content with real representative content to give an accurate depiction of what a user will ultimately see.

Pages are essential for testing the effectiveness of the design system. This final form allows us to loop back to modify our molecules, organisms, and templates to better address the real context of the design.

Pages also provide a place to test variations in templates, such as testing an article containing a 40-character-length headline and other article with a 340-character-length headline. What does it look like when a user has one item in their shopping cart versus 10 items with a discount code applied? These specific page instances test the resiliency of the system, influencing how the underlying molecules, organisms, and templates are constructed.

### References

<http://patternlab.io/about.html>