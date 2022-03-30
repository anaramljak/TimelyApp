package timely.service;

import org.springframework.stereotype.Service;
import timely.model.TimeModel;
import timely.repository.TimeRepository;

import java.util.List;

@Service
public class TimeService {
    private final TimeRepository repository;

    public TimeService(TimeRepository repository) {
        this.repository = repository;
    }

    public void save(TimeModel timeModel){
        repository.save(timeModel);
    }

    public List<TimeModel> findAll(){
        return repository.findAll();

    }
}
