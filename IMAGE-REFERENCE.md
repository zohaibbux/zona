# Image Reference Guide

## All Images in public/ Directory

### Company Logos

1. **logo-zona-scientific.png**

   - Usage: Main navigation logo
   - Dimensions: 350x70px
   - Used in: Header component, all pages

2. **footer-logo-white.png**
   - Usage: Footer logo (white version)
   - Dimensions: 250x80px
   - Used in: Footer component

### Hero & Background Images

3. **hero-laboratory-background.png**

   - Usage: Main hero section background
   - Dimensions: Full width
   - Used in: Homepage hero section
   - Original: image 33.png

4. **products-section-background.png**
   - Usage: Products section background
   - Dimensions: Full width
   - Used in: Homepage products section
   - Original: backgroundd.png

### Service Images

5. **service-importing-image.png**

   - Usage: Importing service card image
   - Dimensions: 400x427px
   - Used in: Homepage services section
   - Original: image 34.png

6. **service-distributing-image.png**

   - Usage: Distributing service card image, Mission page
   - Dimensions: 400x427px
   - Used in: Homepage services section, Mission page
   - Original: image.png

7. **importing-service-photo.jpeg**

   - Usage: Importing service page hero
   - Dimensions: 471x425px
   - Used in: /importing page
   - Original: imp.jpeg

8. **distributing-service-photo.png**
   - Usage: Distributing service page hero
   - Dimensions: 471x425px
   - Used in: /distributing page
   - Original: temp.png

### Product Showcase Images

9. **lab-equipment-showcase.png**

   - Usage: Lab equipment product image
   - Dimensions: 471x425px
   - Used in: /lab-equipments page
   - Original: image 37.png

10. **chemical-salts-image.png**

    - Usage: Chemical salts product image
    - Dimensions: 471x425px
    - Used in: /chemical-salts page
    - Original: image 38.png

11. **lab-graded-acids-image.png**
    - Usage: Lab graded acids product image
    - Dimensions: 471x425px
    - Used in: /graded-acids page
    - Original: Group 119.png

### About & Mission Images

12. **about-us-laboratory.png**

    - Usage: About us section image
    - Dimensions: 571x584px
    - Used in: Homepage about section
    - Original: steptodown.com213702 1.png

13. **promise-partnership-image.png**
    - Usage: Promise page hero image
    - Dimensions: 471x425px
    - Used in: /promise page
    - Original: imm.png

### Icon Set

14. **icon-mission.png**

    - Usage: Mission card icon
    - Dimensions: 44x44px
    - Used in: Homepage about section
    - Original: icons8-mission-24.png

15. **icon-promise-heart.png**

    - Usage: Promise card icon
    - Dimensions: 44x44px
    - Used in: Homepage about section
    - Original: icons8-heart-30.png

16. **icon-lab-equipment.png**

    - Usage: Lab equipment product icon
    - Dimensions: 44x44px
    - Used in: Homepage products section
    - Original: icons8-lab-equipment-68 1.png

17. **icon-chemical-flask.png**

    - Usage: Chemical salts product icon
    - Dimensions: 44x44px
    - Used in: Homepage products section
    - Original: Vector.png

18. **icon-acid-flask.png**

    - Usage: Graded acids product icon
    - Dimensions: 44x44px
    - Used in: Homepage products section
    - Original: icons8-acid-flask-50 1.png

19. **icon-calendar-schedule.png**

    - Usage: Importing service icon
    - Dimensions: 44x44px
    - Used in: Homepage services section
    - Original: scedule.png

20. **icon-dentist-service.png**
    - Usage: Distributing service icon
    - Dimensions: 44x44px
    - Used in: Homepage services section
    - Original: dentist.png

## Image Usage by Page

### Homepage (/)

- hero-laboratory-background.png (Hero section)
- about-us-laboratory.png (About section)
- icon-mission.png (Mission card)
- icon-promise-heart.png (Promise card)
- service-importing-image.png (Services)
- service-distributing-image.png (Services)
- icon-calendar-schedule.png (Importing icon)
- icon-dentist-service.png (Distributing icon)
- products-section-background.png (Products background)
- icon-lab-equipment.png (Products)
- icon-chemical-flask.png (Products)
- icon-acid-flask.png (Products)

### Mission Page (/mission)

- service-distributing-image.png

### Promise Page (/promise)

- promise-partnership-image.png

### Importing Page (/importing)

- importing-service-photo.jpeg

### Distributing Page (/distributing)

- distributing-service-photo.png

### Lab Equipments Page (/lab-equipments)

- lab-equipment-showcase.png

### Chemical Salts Page (/chemical-salts)

- chemical-salts-image.png

### Graded Acids Page (/graded-acids)

- lab-graded-acids-image.png

### All Pages (Header)

- logo-zona-scientific.png

### All Pages (Footer)

- footer-logo-white.png

## Quick Reference: Old → New Names

```
image 1.png                  → logo-zona-scientific.png
image 33.png                 → hero-laboratory-background.png
image 34.png                 → service-importing-image.png
image.png                    → service-distributing-image.png
backgroundd.png              → products-section-background.png
steptodown.com213702 1.png   → about-us-laboratory.png
image 36.png                 → footer-logo-white.png
image 37.png                 → lab-equipment-showcase.png
image 38.png                 → chemical-salts-image.png
Group 119.png                → lab-graded-acids-image.png
imm.png                      → promise-partnership-image.png
imp.jpeg                     → importing-service-photo.jpeg
temp.png                     → distributing-service-photo.png
icons8-mission-24.png        → icon-mission.png
icons8-heart-30.png          → icon-promise-heart.png
icons8-lab-equipment-68 1.png → icon-lab-equipment.png
Vector.png                   → icon-chemical-flask.png
icons8-acid-flask-50 1.png   → icon-acid-flask.png
scedule.png                  → icon-calendar-schedule.png
dentist.png                  → icon-dentist-service.png
```

## Image Optimization Notes

All images are automatically optimized by Next.js Image component:

- Lazy loading enabled
- Responsive sizing
- Modern formats (WebP) when supported
- Proper alt text for accessibility
- Priority loading for above-the-fold images
