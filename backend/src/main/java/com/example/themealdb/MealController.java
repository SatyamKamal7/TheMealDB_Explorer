package com.example.themealdb;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class MealController {

    private final RestTemplate rest = new RestTemplate();

    @Value("${themealdb.base:https://www.themealdb.com/api/json/v1/1}")
    private String base;

    // Search meals by name
    @GetMapping("/search")
    @Cacheable("search")
    public ResponseEntity<String> search(@RequestParam String name) {
        String url = String.format("%s/search.php?s=%s", base, name);
        String resp = rest.getForObject(url, String.class);
        return ResponseEntity.ok(resp);
    }

    // List categories
    @GetMapping("/categories")
    @Cacheable("categories")
    public ResponseEntity<String> categories() {
        String url = String.format("%s/list.php?c=list", base);
        String resp = rest.getForObject(url, String.class);
        return ResponseEntity.ok(resp);
    }

    // Filter by category
    @GetMapping("/category/{name}")
    @Cacheable("category")
    public ResponseEntity<String> byCategory(@PathVariable String name) {
        String url = String.format("%s/filter.php?c=%s", base, name);
        String resp = rest.getForObject(url, String.class);
        return ResponseEntity.ok(resp);
    }

    // Random meal
    @GetMapping("/random")
    @Cacheable("random")
    public ResponseEntity<String> randomMeal() {
        String url = String.format("%s/random.php", base);
        String resp = rest.getForObject(url, String.class);
        return ResponseEntity.ok(resp);
    }

    // Lookup by ID
    @GetMapping("/meal/{id}")
    @Cacheable("meal")
    public ResponseEntity<String> lookup(@PathVariable String id) {
        String url = String.format("%s/lookup.php?i=%s", base, id);
        String resp = rest.getForObject(url, String.class);
        return ResponseEntity.ok(resp);
    }
}