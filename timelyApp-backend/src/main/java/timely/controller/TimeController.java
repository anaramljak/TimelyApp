package timely.controller;

import org.springframework.web.bind.annotation.*;
import timely.model.TimeModel;
import timely.service.TimeService;

import java.sql.Time;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
public class TimeController {
    private final TimeService service;

    public TimeController(TimeService service) {
        this.service = service;
    }

    @CrossOrigin(value = "http://localhost:4200")
    @GetMapping("/index")
    public List<TimeModel> getAllData(){
        return service.findAll();
    }

    @CrossOrigin(value = "http://localhost:4200")
    @RequestMapping(value="/index", method=RequestMethod.POST)
    public void postData(@RequestBody TimeModel t) {
        service.save(t);
    }


}
