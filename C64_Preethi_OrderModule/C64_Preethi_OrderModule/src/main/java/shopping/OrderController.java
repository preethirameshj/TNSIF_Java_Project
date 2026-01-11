package shopping;

	import java.util.List;
	import java.util.NoSuchElementException;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.*;
	import org.springframework.web.bind.annotation.*;



	@RestController
	@RequestMapping("orders")
	@CrossOrigin(origins = "http://localhost:4200")
	public class OrderController {

	    @Autowired
	    private OrderService service;

	    @GetMapping
	    public List<Order> listAll() {
	        return service.listAll();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Order> get(@PathVariable Integer id) {
	        try {
	            Order order = service.get(id);
	            return new ResponseEntity<>(order, HttpStatus.OK);
	        } catch (NoSuchElementException e) {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }

	    @PostMapping
	    public ResponseEntity<?> add(@RequestBody Order order) {
	        service.save(order);
	        return new ResponseEntity<>(HttpStatus.CREATED);
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<?> update(@RequestBody Order order, @PathVariable Integer id) {
	        try {
	            order.setOrderId(id);
	            service.save(order);
	            return new ResponseEntity<>(HttpStatus.OK);
	        } catch (NoSuchElementException e) {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<?> delete(@PathVariable Integer id) {
	        service.delete(id);
	        return new ResponseEntity<>(HttpStatus.OK);
	    }
	}

